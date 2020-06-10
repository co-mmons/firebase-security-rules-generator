import {Matchable} from "../shared/Matchable";
import {Request as $Request} from "../shared/Request";

export class Request<D> extends $Request {

    constructor(data: D) {
        super();

        this.resource = new Resource(data);
    }

    readonly resource: Resource<D>;
}

export class Resource<D> {
    constructor(public readonly data: D) {
    }
}

export class ResourceData implements Matchable {

    constructor() {
        this.request = new Request(this);
        this.resource = this.request.resource;
    }

    protected readonly resource: Resource<this>;

    protected readonly request: Request<this>;
}
