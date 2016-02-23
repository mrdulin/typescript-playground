interface IReportPayload<Model> {
  scenario: number;
  title: string;
  body: Model[];
}

interface IDailyReportService {
  HOURS: number;
  SCENARIO: Map<number, string>;
  getScenario<Body>(scenario: number, body: Body[]): IReportPayload<Body>;
  checkSecaniro(scenario: number): boolean;
}

let DailyReportService: IDailyReportService;
DailyReportService = class {
  public static readonly HOURS = 24;
  public static readonly SCENARIO = new Map([
    [1, 'List of Daily user logins'],
    [2, 'New ads run in last 24 hours'],
    [3, 'users of first ad placed'],
    [4, 'Ads that hit 2,000 impressions'],
    [5, 'Ads that hit 5,000 impressions'],
    [6, 'List of ads expiring that week (Monday - Sunday)'],
    [7, 'List of best performing Ads by CTR per orgID'],
    [8, 'List of locations with no current ads running'],
    [9, 'franchise network that received 10,000+ impressions in last 7 days']
  ]);

  public static getScenario<Body>(scenario: number, body: Body[]): IReportPayload<Body> {
    if (!this.checkSecaniro(scenario)) {
      throw new Error(`Daily report scenario: ${scenario} does not exist. Please check.`);
    }
    const title = this.SCENARIO.get(scenario) as string;
    return { scenario, title, body };
  }

  public static checkSecaniro(scenario: number): boolean {
    return this.SCENARIO.has(scenario);
  }
};

export { DailyReportService, IReportPayload, IDailyReportService };
