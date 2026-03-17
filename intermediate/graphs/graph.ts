interface weightedEdge {
    target: number;
    weight: number;
}

class UndirectedGraph {
    private edgeValue: Set<weightedEdge> = new Set<weightedEdge>;
    private edges: Map<number, Set<weightedEdge>>;
    
    constructor() {
        this.edges = new Map();
    }

    public addVertex(vertex: number) {
        this.edges.set(vertex, this.edgeValue);
    }
    public addEdge(vertex1: number, vertex2: number, weight: number) {
        if(!weight) weight = 0;
        const edVal: weightedEdge = {
            target: vertex2,
            weight: weight
        }
        const newVal : Set<weightedEdge> = 
        this.edges.get(vertex1)?.add(edVal) || new Set<weightedEdge>;
        this.edges.set(vertex1, newVal);
    }
}

const uGraph = new UndirectedGraph();
uGraph.addVertex(1);