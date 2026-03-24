interface edge {
    v1: number;
    v2: number;
    weight?: number;
}

class Queue {
    private list: Array<number> = new Array();
    
    constructor() {
        this.list = new Array();
    }   
    
    public add(item:number) {
        this.list.push(item);
    }

    public shift():number {
        return this.list.shift()!;
    }

    public length():number {
        return this.list.length;
    }
}

class UndirectedGraph {
    private graph : Map<number, Set<edge>>;

    constructor() {
        this.graph = new Map();
    }

    private isSameEdge(e1: edge, e2: edge): boolean {
        return ((e1.v1 == e2.v1 && e1.v2 == e2.v2) || (e1.v1 == e2.v2 && e1.v2 == e2.v1))
    }

    public addVertex(value: number): void {
        if (this.graph.has(value)) return
        const newEdgesList: Set<edge> = new Set();
        this.graph.set(value, newEdgesList);
    }

    public addEdge(edge: edge): void {
        if (!this.graph.has(edge.v1)) this.addVertex(edge.v1);
        if (!this.graph.has(edge.v2)) this.addVertex(edge.v2);

        if (this.graph.has(edge.v1) && this.graph.has(edge.v2)) {
            for (let e of this.graph.get(edge.v1)!) {
                if (this.isSameEdge(e, edge)) return;
            }
        }
        // Get old lists
        const oldv1EdgesList = this.graph.get(edge.v1)!;
        const oldv2EdgesList = this.graph.get(edge.v2)!;

        // Update both vertices with edge
        this.graph.set(edge.v1, oldv1EdgesList.add(edge));
        this.graph.set(edge.v2, oldv2EdgesList.add(this.flipEdge(edge)));
    }

    private flipEdge(edge:edge): edge {
        return {
            v1: edge.v2,
            v2: edge.v1,
            weight: edge.weight
        }
    }

    // compare edge to list of vertex edges and delete if same
    private removeFromVertex(edge:edge, list:Set<edge>):void {
        for (let item of list) {
            if (this.isSameEdge(item, edge)) list.delete(item)
        }
    }

    public removeEdge(edge: edge): void {
        //the edge does not exist bc one or two of its vertices don't
        if (!(this.graph.has(edge.v1) && this.graph.has(edge.v2))) return

        //remove it from v1
        this.removeFromVertex(edge, this.graph.get(edge.v1)!);
        //remove it from v2
        this.removeFromVertex(edge, this.graph.get(edge.v2)!);
    }

    public removeVertex(v: number): void {
        if (!this.graph.has(v)) return

        for (let e of this.graph.get(v)!) {
            this.removeEdge(e);
        }
        this.graph.delete(v);
    }

    public display(premessage: string = "Graph") {
        console.log(premessage, ':\n',
            Object.fromEntries(
                Array.from(this.graph.entries(), ([key, set]) => [key, Array.from(set)])
            )
        );
    }

    // BFS Section
    public traverseBFSRegressivly(fn: (v:number) =>void, queue:Queue = new Queue(), visited:Set<number> = new Set(), vertex:number = this.graph.keys().next().value!):void {

        if (visited.size == this.graph.size) return

        queue.add(vertex)
        let v:number;

        while(queue.length()) {
            v = queue.shift();
            if(!visited.has(v)) {
                visited.add(v);
                fn(v);
                for (let adjacentV of this.graph.get(v)!) {
                    queue.add(adjacentV.v2);
                }
            }
        }
        for (let ver of this.graph.keys()) {
            if (visited.size == this.graph.size) break;
            if (!visited.has(ver)) this.traverseBFSRegressivly(fn,queue,visited, ver);
        } 
    }

    public travereDFS(fn: (v:number) =>void) {
        
    }


    public traverseBFS(fn: (v:number) =>void):void {
        let queue = new Queue();
        let visited = new Set<number>();

        queue.add(this.graph.keys().next().value!)
        let vertex:number;

        while(queue.length()) {
            vertex = queue.shift();
            if(!visited.has(vertex)) {
                visited.add(vertex);
                fn(vertex);
                for (let adjacentV of this.graph.get(vertex)!) {
                    queue.add(adjacentV.v2);
                }
            }
        }
        for (let v of this.graph.keys()) {
            if (visited.size == this.graph.size) break; 
            if(!visited.has(v)) {
                fn(v);
                for (let adjacentV of this.graph.get(v)!) {
                    if(!visited.has(v)) fn(adjacentV.v2);
                }
            }
        }
        console.log(this.graph);
    }
}


const undirectedGraph = new UndirectedGraph();
undirectedGraph.addEdge({ v1: 1, v2: 2, weight: 5 });
undirectedGraph.addEdge({ v1: 1, v2: 2, weight: 5 });
undirectedGraph.addEdge({ v1: 1, v2: 3, weight: 1 });
undirectedGraph.addEdge({ v1: 2, v2: 3, weight: 4 });
undirectedGraph.addEdge({ v1: 3, v2: 2 });

undirectedGraph.addEdge({ v1: 5, v2: 3, weight: 5 });
undirectedGraph.addEdge({ v1: 7, v2: 2, weight: 1 });
undirectedGraph.addEdge({ v1: 4, v2: 7, weight: 4 });
// undirectedGraph.display("Graph before vertex 3 is removed");
// undirectedGraph.removeVertex(3);
// undirectedGraph.display("Graph after vertex 3 is removed");

undirectedGraph.traverseBFSRegressivly((item)=> console.log(item));