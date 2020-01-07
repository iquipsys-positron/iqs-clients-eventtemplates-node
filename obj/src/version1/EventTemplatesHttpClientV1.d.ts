import { FilterParams } from 'pip-services3-commons-node';
import { PagingParams } from 'pip-services3-commons-node';
import { DataPage } from 'pip-services3-commons-node';
import { CommandableHttpClient } from 'pip-services3-rpc-node';
import { EventTemplateV1 } from './EventTemplateV1';
import { IEventTemplatesClientV1 } from './IEventTemplatesClientV1';
export declare class EventTemplatesHttpClientV1 extends CommandableHttpClient implements IEventTemplatesClientV1 {
    constructor(config?: any);
    getTemplates(correlationId: string, filter: FilterParams, paging: PagingParams, callback: (err: any, page: DataPage<EventTemplateV1>) => void): void;
    getTemplateById(correlationId: string, templateId: string, callback: (err: any, template: EventTemplateV1) => void): void;
    createTemplate(correlationId: string, template: EventTemplateV1, callback: (err: any, template: EventTemplateV1) => void): void;
    updateTemplate(correlationId: string, template: EventTemplateV1, callback: (err: any, template: EventTemplateV1) => void): void;
    deleteTemplateById(correlationId: string, templateId: string, callback: (err: any, template: EventTemplateV1) => void): void;
}
