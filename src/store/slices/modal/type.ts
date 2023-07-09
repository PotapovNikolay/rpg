type TProcess = 'edit' | 'create'

export interface IInitialState{
    show:boolean,
    process:TProcess,
    preloader:boolean
}