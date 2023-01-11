export interface MachineSlim {
    id: number;
    displayName: string;
}

export interface Machine extends MachineSlim {
    logs: LogItem[];
}

export type LogLevel = 'WARN' | 'ERROR' | 'INFO';

export interface LogItem {
    id: number;
    title: string;
    level: LogLevel;
    isRead: boolean;
}