declare namespace Express {
    export interface Response {
        response: (data: any) => void
    }

    export interface Request {
        currentUser: any
    }
}
