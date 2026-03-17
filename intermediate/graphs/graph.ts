interface edge {
    head: number;
    target: number;
    weight?: number;
}

class UndirectedGraph {
    private graph : Map<number, Set<edge>>;

    constructor() {
        this.graph = new Map();
    }

    public addVertex(value: number): void {
        if (this.graph.has(value)) return
        const newEdgesList: Set<edge> = new Set();
        this.graph.set(value, newEdgesList);
    }

    public addEdge(edge: edge): void {
        if (!this.graph.has(edge.head)) this.addVertex(edge.head);
        if (!this.graph.has(edge.target)) this.addVertex(edge.target);

        if (this.graph.has(edge.head) && this.graph.has(edge.target)) {
            for (let e of this.graph.get(edge.head)!) {
                if ((e.head == edge.head && e.target == edge.target) || (e.head == edge.target && e.target == edge.head)) return;
            }
        }
        // Get old lists
        const oldHeadEdgesList = this.graph.get(edge.head)!;
        const oldTargetEdgesList = this.graph.get(edge.target)!;

        // Update both vertices with edge
        this.graph.set(edge.head, oldHeadEdgesList.add(edge));
        this.graph.set(edge.target, oldTargetEdgesList.add(edge));
    }

    public display() {
        console.log(
            Object.fromEntries(
                Array.from(this.graph.entries(), ([key, set]) => [key, Array.from(set)])
            )
        );
    }
}

const undirectedGraph = new UndirectedGraph();
undirectedGraph.addEdge({ head: 1, target: 2, weight: 5 });
undirectedGraph.addEdge({ head: 1, target: 2, weight: 5 });

undirectedGraph.display();