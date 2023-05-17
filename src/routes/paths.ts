export const rootAuthPath = '/auth';
export const rootMainPath = '/main';

export const mainPath = {
    invoices: { path: `${rootMainPath}/invoices`, slug: "/invoices", name: 'Invoices' },
    dashboard: { path: `${rootMainPath}/dashboard`, slug: "/dashboard", name: 'Dashboard' },
};

export const authPath = {
    signIn: { path: `${rootAuthPath}/sign-in`, slug: "/sign-in", name: 'Sign In' },
};