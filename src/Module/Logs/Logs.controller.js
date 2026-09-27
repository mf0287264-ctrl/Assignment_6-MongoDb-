import * as LogsService from "./Logs.service.js";

export const insertLog = (req, res) => LogsService.insertLogService(req, res);
