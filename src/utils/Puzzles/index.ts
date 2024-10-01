interface IProcedures {
    changeState: (state: string) => void;
}

class Puzzles {
    public procedures: IProcedures | null = null;
    public setProcedures(procedures: IProcedures | null) {
        this.procedures = procedures;
    }
}

const puzzles = new Puzzles();
export default puzzles;
