import { LogLevel, Machine } from "src/app/model/machine.model";

export interface MachineLogsState {
    isBusy: boolean;
    searchWord: string;
    machine: Machine | null;
    machineId?: number;
    selectedLevel: LogLevel[];
}

export const DEFAULT_MACHINE_LOGS_STATE: MachineLogsState = {
    searchWord: '',
    isBusy: false,
    machine: null,
    selectedLevel: ['WARN', 'ERROR']
}