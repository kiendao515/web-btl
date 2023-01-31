import { AuthService } from '../auth.service';
declare const LocalStrategy_base: new (...args: any[]) => any;
export declare class LocalStrategy extends LocalStrategy_base {
    private readonly authService;
    constructor(authService: AuthService);
    validateTeacher(email: string, password: string): Promise<any>;
}
export {};
