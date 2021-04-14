import { Injectable } from '@angular/core'
import { Action } from '@ngrx/store'
import { Tutorial } from '../models/tutorial.model'

export const ADD_TUTORIAL       = '[TUTORIAL] Add'
export const REMOVE_TUTORIAL    = '[TUTORIAL] Remove'

//we create classes for each of our actions with the constructor
//which allows us to insert a payload of data
export class AddTutorial implements Action {
    readonly type = ADD_TUTORIAL

    constructor(public payload: Tutorial) {}
}

export class RemoveTutorial implements Action {
    readonly type = REMOVE_TUTORIAL

    constructor(public payload: number) {}
}

//export the two action classes
export type Actions = AddTutorial | RemoveTutorial
