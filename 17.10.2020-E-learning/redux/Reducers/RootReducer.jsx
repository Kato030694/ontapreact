import {combineReducers} from "redux";
import { CourseReducer } from "./Course";
export const RootReducer = combineReducers({
    Courses: CourseReducer

});

