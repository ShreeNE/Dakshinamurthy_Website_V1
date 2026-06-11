import { Router } from 'express';
import { getAllDomains, createDomain, deleteDomain } from '../controllers/domains.controller.js';

export const domainsRouter = Router();

domainsRouter.get('/', getAllDomains);
domainsRouter.post('/', createDomain);
domainsRouter.delete('/:id', deleteDomain);
