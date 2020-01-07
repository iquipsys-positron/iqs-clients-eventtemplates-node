let assert = require('chai').assert;
let async = require('async');

import { Descriptor } from 'pip-services3-commons-node';
import { ConfigParams } from 'pip-services3-commons-node';
import { References } from 'pip-services3-commons-node';
import { ConsoleLogger } from 'pip-services3-components-node';

import { EventTemplatesMemoryPersistence } from 'iqs-services-eventtemplates-node';
import { EventTemplatesController } from 'iqs-services-eventtemplates-node';
import { EventTemplatesHttpServiceV1 } from 'iqs-services-eventtemplates-node';
import { IEventTemplatesClientV1 } from '../../src/version1/IEventTemplatesClientV1';
import { EventTemplatesHttpClientV1 } from '../../src/version1/EventTemplatesHttpClientV1';
import { EventTemplatesClientFixtureV1 } from './EventTemplatesClientFixtureV1';

var httpConfig = ConfigParams.fromTuples(
    "connection.protocol", "http",
    "connection.host", "localhost",
    "connection.port", 3000
);

suite('EventTemplatesRestClientV1', ()=> {
    let service: EventTemplatesHttpServiceV1;
    let client: EventTemplatesHttpClientV1;
    let fixture: EventTemplatesClientFixtureV1;

    suiteSetup((done) => {
        let logger = new ConsoleLogger();
        let persistence = new EventTemplatesMemoryPersistence();
        let controller = new EventTemplatesController();

        service = new EventTemplatesHttpServiceV1();
        service.configure(httpConfig);

        let references: References = References.fromTuples(
            new Descriptor('pip-services', 'logger', 'console', 'default', '1.0'), logger,
            new Descriptor('iqs-services-eventtemplates', 'persistence', 'memory', 'default', '1.0'), persistence,
            new Descriptor('iqs-services-eventtemplates', 'controller', 'default', 'default', '1.0'), controller,
            new Descriptor('iqs-services-eventtemplates', 'service', 'http', 'default', '1.0'), service
        );
        controller.setReferences(references);
        service.setReferences(references);

        client = new EventTemplatesHttpClientV1();
        client.setReferences(references);
        client.configure(httpConfig);

        fixture = new EventTemplatesClientFixtureV1(client);

        service.open(null, (err) => {
            client.open(null, done);
        });
    });
    
    suiteTeardown((done) => {
        client.close(null);
        service.close(null, done);
    });

    test('CRUD Operations', (done) => {
        fixture.testCrudOperations(done);
    });

});
