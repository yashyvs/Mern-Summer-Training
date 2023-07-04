class Note {
    constructor(noteObject) {
        for (let key in noteObject) {
            this[key] = noteObject[key];
        }
        this.isMarked = false;
    }
}

export default Note;