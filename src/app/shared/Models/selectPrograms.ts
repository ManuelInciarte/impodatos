export interface selectPrograms{
    id: string,
    displayName: string
}

export interface Programs {
    datasets: any[];
    programs: Program[];
}

export interface Program {
    status:           string;
    programid:        string;
    programname:      string;
    attributemapping: Attributemapping[];
    programStages:        ProgramStage[];
}

export interface Attributemapping {
    id:     string;
    name:   string;
    column: string;
}
export interface ProgramStage {
    id:                       string;
    name:                     string;
    programStageDataElements: ProgramStageDataElement[];
}
export interface ProgramStageDataElement {
    dataElement: DataElement;
}

export interface DataElement {
    id: string;
}
