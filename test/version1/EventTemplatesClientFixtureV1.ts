let _ = require('lodash');
let async = require('async');
let assert = require('chai').assert;

import { PagingParams } from 'pip-services3-commons-node';

import { EventTemplateV1 } from '../../src/version1/EventTemplateV1';
import { SeverityV1 } from '../../src/version1/SeverityV1';
import { IEventTemplatesClientV1 } from '../../src/version1/IEventTemplatesClientV1';

let TEMPLATE1: EventTemplateV1 = {
    id: '1',
    org_id: '1',
    severity: SeverityV1.Medium,
    description: 'Event template #1'
};
let TEMPLATE2: EventTemplateV1 = {
    id: '2',
    org_id: '1',
    severity: SeverityV1.High,
    description: 'Event template #2'
};

export class EventTemplatesClientFixtureV1 {
    private _client: IEventTemplatesClientV1;
    
    constructor(client: IEventTemplatesClientV1) {
        this._client = client;
    }
        
    testCrudOperations(done) {
        let template1, template2;

        async.series([
        // Create one template
            (callback) => {
                this._client.createTemplate(
                    null,
                    TEMPLATE1,
                    (err, template) => {
                        assert.isNull(err);

                        assert.isObject(template);
                        assert.equal(template.org_id, TEMPLATE1.org_id);
                        assert.equal(template.severity, TEMPLATE1.severity);
                        assert.equal(template.description, TEMPLATE1.description);

                        template1 = template;

                        callback();
                    }
                );
            },
        // Create another template
            (callback) => {
                this._client.createTemplate(
                    null,
                    TEMPLATE2,
                    (err, template) => {
                        assert.isNull(err);

                        assert.isObject(template);
                        assert.equal(template.org_id, TEMPLATE2.org_id);
                        assert.equal(template.severity, TEMPLATE2.severity);
                        assert.equal(template.description, TEMPLATE2.description);

                        template2 = template;

                        callback();
                    }
                );
            },
        // Get all templates
            (callback) => {
                this._client.getTemplates(
                    null,
                    null,
                    new PagingParams(0,5,false),
                    (err, templates) => {
                        assert.isNull(err);

                        assert.isObject(templates);
                        assert.isTrue(templates.data.length >= 2);

                        callback();
                    }
                );
            },
        // Update the template
            (callback) => {
                template1.description = 'Updated template 1';

                this._client.updateTemplate(
                    null,
                    template1,
                    (err, template) => {
                        assert.isNull(err);

                        assert.isObject(template);
                        assert.equal(template.description, 'Updated template 1');
                        assert.equal(template.org_id, TEMPLATE1.org_id);

                        template1 = template;

                        callback();
                    }
                );
            },
        // Delete template
            (callback) => {
                this._client.deleteTemplateById(
                    null,
                    template1.id,
                    (err) => {
                        assert.isNull(err);

                        callback();
                    }
                );
            },
        // Try to get delete template
            (callback) => {
                this._client.getTemplateById(
                    null,
                    template1.id,
                    (err, template) => {
                        assert.isNull(err);
                        
                        assert.isNull(template || null);

                        callback();
                    }
                );
            }
        ], done);
    }
}
