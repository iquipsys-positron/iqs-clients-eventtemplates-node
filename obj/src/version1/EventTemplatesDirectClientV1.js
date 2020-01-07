"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const pip_services3_commons_node_1 = require("pip-services3-commons-node");
const pip_services3_rpc_node_1 = require("pip-services3-rpc-node");
class EventTemplatesDirectClientV1 extends pip_services3_rpc_node_1.DirectClient {
    constructor() {
        super();
        this._dependencyResolver.put('controller', new pip_services3_commons_node_1.Descriptor("iqs-services-eventtemplates", "controller", "*", "*", "*"));
    }
    getTemplates(correlationId, filter, paging, callback) {
        let timing = this.instrument(correlationId, 'event_templates.get_templates');
        this._controller.getTemplates(correlationId, filter, paging, (err, page) => {
            timing.endTiming();
            callback(err, page);
        });
    }
    getTemplateById(correlationId, templateId, callback) {
        let timing = this.instrument(correlationId, 'event_templates.get_template_by_id');
        this._controller.getTemplateById(correlationId, templateId, (err, template) => {
            timing.endTiming();
            callback(err, template);
        });
    }
    createTemplate(correlationId, template, callback) {
        let timing = this.instrument(correlationId, 'event_templates.create_template');
        this._controller.createTemplate(correlationId, template, (err, template) => {
            timing.endTiming();
            callback(err, template);
        });
    }
    updateTemplate(correlationId, template, callback) {
        let timing = this.instrument(correlationId, 'event_templates.update_template');
        this._controller.updateTemplate(correlationId, template, (err, template) => {
            timing.endTiming();
            callback(err, template);
        });
    }
    deleteTemplateById(correlationId, templateId, callback) {
        let timing = this.instrument(correlationId, 'event_templates.delete_template_by_id');
        this._controller.deleteTemplateById(correlationId, templateId, (err, template) => {
            timing.endTiming();
            callback(err, template);
        });
    }
}
exports.EventTemplatesDirectClientV1 = EventTemplatesDirectClientV1;
//# sourceMappingURL=EventTemplatesDirectClientV1.js.map