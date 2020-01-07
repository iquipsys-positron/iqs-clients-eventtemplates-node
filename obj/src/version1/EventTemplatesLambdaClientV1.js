"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let _ = require('lodash');
const pip_services3_commons_node_1 = require("pip-services3-commons-node");
const pip_services3_aws_node_1 = require("pip-services3-aws-node");
class EventTemplatesLambdaClientV1 extends pip_services3_aws_node_1.CommandableLambdaClient {
    constructor(config) {
        super('event_templates');
        if (config != null)
            this.configure(pip_services3_commons_node_1.ConfigParams.fromValue(config));
    }
    getTemplates(correlationId, filter, paging, callback) {
        this.callCommand('get_templates', correlationId, {
            filter: filter,
            paging: paging
        }, callback);
    }
    getTemplateById(correlationId, templateId, callback) {
        this.callCommand('get_template_by_id', correlationId, {
            template_id: templateId
        }, callback);
    }
    createTemplate(correlationId, template, callback) {
        this.callCommand('create_template', correlationId, {
            template: template
        }, callback);
    }
    updateTemplate(correlationId, template, callback) {
        this.callCommand('update_template', correlationId, {
            template: template
        }, callback);
    }
    deleteTemplateById(correlationId, templateId, callback) {
        this.callCommand('delete_template_by_id', correlationId, {
            template_id: templateId
        }, callback);
    }
}
exports.EventTemplatesLambdaClientV1 = EventTemplatesLambdaClientV1;
//# sourceMappingURL=EventTemplatesLambdaClientV1.js.map