export interface IDashboardRepository {
    getDashboardData: () => Promise<any>;
}