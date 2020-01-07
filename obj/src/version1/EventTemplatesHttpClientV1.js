"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const pip_services3_commons_node_1 = require("pip-services3-commons-node");
const pip_services3_rpc_node_1 = require("pip-services3-rpc-node");
class EventTemplatesHttpClientV1 extends pip_services3_rpc_node_1.CommandableHttpClient {
    constructor(config) {
        super('v1/event_templates');
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
exports.EventTemplatesHttpClientV1 = EventTemplatesHttpClientV1;
//# sourceMappingURL=EventTemplatesHttpClientV1.js.map