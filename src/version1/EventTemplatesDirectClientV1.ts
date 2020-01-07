import { IReferences } from 'pip-services3-commons-node';
import { Descriptor } from 'pip-services3-commons-node';
import { FilterParams } from 'pip-services3-commons-node';
import { PagingParams} from 'pip-services3-commons-node';
import { DataPage } from 'pip-services3-commons-node';
import { DirectClient } from 'pip-services3-rpc-node';

import { IEventTemplatesClientV1 } from './IEventTemplatesClientV1';
//import { IEventTemplatesController } from 'pip-services-eventtemplates-node';
import { EventTemplateV1 } from './EventTemplateV1';

export class EventTemplatesDirectClientV1 extends DirectClient<any> implements IEventTemplatesClientV1 {
            
    public constructor() {
        super();
        this._dependencyResolver.put('controller', new Descriptor("iqs-services-eventtemplates", "controller", "*", "*", "*"))
    }

    public getTemplates(correlationId: string, filter: FilterParams, paging: PagingParams, 
        callback: (err: any, page: DataPage<EventTemplateV1>) => void): void {
        let timing = this.instrument(correlationId, 'event_templates.get_templates');
        this._controller.getTemplates(correlationId, filter, paging, (err, page) => {
            timing.endTiming();
            callback(err, page);
        });
    }

    public getTemplateById(correlationId: string, templateId: string, 
        callback: (err: any, template: EventTemplateV1) => void): void {
        let timing = this.instrument(correlationId, 'event_templates.get_template_by_id');
        this._controller.getTemplateById(correlationId, templateId, (err, template) => {
            timing.endTiming();
            callback(err, template);
        });
    }

    public createTemplate(correlationId: string, template: EventTemplateV1, 
        callback: (err: any, template: EventTemplateV1) => void): void {
        let timing = this.instrument(correlationId, 'event_templates.create_template');
        this._controller.createTemplate(correlationId, template, (err, template) => {
            timing.endTiming();
            callback(err, template);
        });
    }

    public updateTemplate(correlationId: string, template: EventTemplateV1, 
        callback: (err: any, template: EventTemplateV1) => void): void {
        let timing = this.instrument(correlationId, 'event_templates.update_template');
        this._controller.updateTemplate(correlationId, template, (err, template) => {
            timing.endTiming();
            callback(err, template);
        });
    }

    public deleteTemplateById(correlationId: string, templateId: string,
        callback: (err: any, template: EventTemplateV1) => void): void {
        let timing = this.instrument(correlationId, 'event_templates.delete_template_by_id');
        this._controller.deleteTemplateById(correlationId, templateId, (err, template) => {
            timing.endTiming();
            callback(err, template);
        });
    }
}