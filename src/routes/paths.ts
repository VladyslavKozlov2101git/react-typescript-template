export const rootAuthPath = '/auth';
export const rootMainPath = '/main';

export const mainPath = {
    examples: { path: `${rootMainPath}/examples`, slug: "/examples", name: 'Examples' },
    invoices: { path: `${rootMainPath}/invoices`, slug: "/invoices", name: 'Invoices' },
    dashboard: { path: `${rootMainPath}/dashboard`, slug: "/dashboard", name: 'Dashboard' },
    users: { path: `${rootMainPath}/users`, slug: "/users", name: 'Users' },
};

export const authPath = {
    signIn: { path: `${rootAuthPath}/sign-in`, slug: "/sign-in", name: 'Sign In' },
};