let assert = require('chai').assert;
let async = require('async');

import { Descriptor } from 'pip-services3-commons-node';
import { ConfigParams } from 'pip-services3-commons-node';
import { References } from 'pip-services3-commons-node';
import { ConsoleLogger } from 'pip-services3-components-node';

import { EventTemplatesMemoryPersistence } from 'iqs-services-eventtemplates-node';
import { EventTemplatesController } from 'iqs-services-eventtemplates-node';
import { IEventTemplatesClientV1 } from '../../src/version1/IEventTemplatesClientV1';
import { EventTemplatesDirectClientV1 } from '../../src/version1/EventTemplatesDirectClientV1';
import { EventTemplatesClientFixtureV1 } from './EventTemplatesClientFixtureV1';

suite('EventTemplatesDirectClientV1', ()=> {
    let client: EventTemplatesDirectClientV1;
    let fixture: EventTemplatesClientFixtureV1;

    suiteSetup((done) => {
        let logger = new ConsoleLogger();
        let persistence = new EventTemplatesMemoryPersistence();
        let controller = new EventTemplatesController();

        let references: References = References.fromTuples(
            new Descriptor('pip-services', 'logger', 'console', 'default', '1.0'), logger,
            new Descriptor('iqs-services-eventtemplates', 'persistence', 'memory', 'default', '1.0'), persistence,
            new Descriptor('iqs-services-eventtemplates', 'controller', 'default', 'default', '1.0'), controller,
        );
        controller.setReferences(references);

        client = new EventTemplatesDirectClientV1();
        client.setReferences(references);

        fixture = new EventTemplatesClientFixtureV1(client);

        client.open(null, done);
    });
    
    suiteTeardown((done) => {
        client.close(null, done);
    });

    test('CRUD Operations', (done) => {
        fixture.testCrudOperations(done);
    });

});
