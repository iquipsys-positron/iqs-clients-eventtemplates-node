import { FilterParams } from 'pip-services3-commons-node';
import { PagingParams } from 'pip-services3-commons-node';
import { DataPage } from 'pip-services3-commons-node';
import { DirectClient } from 'pip-services3-rpc-node';
import { IEventTemplatesClientV1 } from './IEventTemplatesClientV1';
import { EventTemplateV1 } from './EventTemplateV1';
export declare class EventTemplatesDirectClientV1 extends DirectClient<any> implements IEventTemplatesClientV1 {
    constructor();
    getTemplates(correlationId: string, filter: FilterParams, paging: PagingParams, callback: (err: any, page: DataPage<EventTemplateV1>) => void): void;
    getTemplateById(correlationId: string, templateId: string, callback: (err: any, template: EventTemplateV1) => void): void;
    createTemplate(correlationId: string, template: EventTemplateV1, callback: (err: any, template: EventTemplateV1) => void): void;
    updateTemplate(correlationId: string, template: EventTemplateV1, callback: (err: any, template: EventTemplateV1) => void): void;
    deleteTemplateById(correlationId: string, templateId: string, callback: (err: any, template: EventTemplateV1) => void): void;
}
