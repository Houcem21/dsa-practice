// Directed Graph Section

interface dirEdge {
    head: number;
    target: number;
    weight?: number;
}

class DirectedGraph {
    private graph: Map<number, Set<dirEdge>>;

    constructor() {
        this.graph = new Map();
    }


    public addVertex(v: number) {
        if (this.graph.has(v)) return;
        this.graph.set(v, new Set());
    }

    private verticeHasEdge(v:number , e: dirEdge): boolean {
        if (!this.graph.has(v)) return false
        for (let i of this.graph.get(v)!)
            if (i.head == e.head && i.target == e.target) return true

        return false
    }

    public addEdge(e: dirEdge) {
        // Check if both vertices exist
        if (!this.graph.has(e.head)) this.addVertex(e.head);
        if (!this.graph.has(e.target)) this.addVertex(e.target);

        // Add edge
        if (!this.verticeHasEdge(e.head, e)) this.graph.get(e.head)!.add(e);
    }

    private vertixPointsThere(v: number, t:number) {
        if(!this.graph.has(v)) return false;
        for (let item of this.graph.get(v)!) {
            if (item.target == t) return item
        }
        return false
    }

    public removeVertex(v: number) {
        if(!this.graph.has(v)) return;
        this.graph.delete(v);

        for (let vertix of this.graph.keys()) {
            this.graph.get(vertix)!.delete(this.vertixPointsThere(vertix, v) as dirEdge);
        }
    }

    public removeEdge(e: dirEdge) {
        if (!(this.graph.has(e.head) && this.graph.has(e.target))) return

        this.removeEdgeFromVertex(e.head, e);
    }

    private removeEdgeFromVertex(v: number, e: dirEdge) {
        for (let item of this.graph.get(v)!) {
            if (item.head == e.head && item.target == e.target) {
                this.graph.get(e.head)!.delete(item);
                break;
            }
        }
    }
    public display(premessage: string = "Graph") {
        console.log(premessage, ':\n',
            Object.fromEntries(
                Array.from(this.graph.entries(), ([key, set]) => [key, Array.from(set)])
            )
        );
    }

}

const directedGraph = new DirectedGraph();

directedGraph.addEdge({head: 1, target: 4, weight: 2})
directedGraph.removeVertex(4);
directedGraph.display();

