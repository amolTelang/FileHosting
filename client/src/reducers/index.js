import {combineReducers} from 'redux';
import addFile from './addFile.js'
import searchFile from './searchFile.js';

export default combineReducers({
addFile,searchFile
});