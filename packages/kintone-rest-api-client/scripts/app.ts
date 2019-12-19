import { KintoneAPIClient } from "../src/index";
import { ActionForUpdate } from "../src/client/AppClient";

const APP_ID = 8;
const RECORD_ID = 3;
const SPACE_ID = 3;

export class App {
  private client: KintoneAPIClient;
  constructor(client: KintoneAPIClient) {
    this.client = client;
  }
  public async getFormFields() {
    try {
      console.log(await this.client.app.getFormFields({ app: APP_ID }));
    } catch (error) {
      console.log(error);
    }
  }

  public async getFormFieldsPreview() {
    try {
      console.log(
        await this.client.app.getFormFields({ app: APP_ID, preview: true })
      );
    } catch (error) {
      console.log(error);
    }
  }

  public async addFormFields() {
    const properties = {
      fieldCode: {
        type: "SINGLE_LINE_TEXT",
        code: "fieldCode",
        label: "Text Field"
      }
    };
    try {
      console.log(
        await this.client.app.addFormFields({ app: APP_ID, properties })
      );
    } catch (error) {
      console.log(error);
    }
  }

  public async updateFormFields() {
    const properties = {
      fieldCode: {
        type: "SINGLE_LINE_TEXT",
        label: "Text Field 2"
      }
    };
    try {
      console.log(
        await this.client.app.updateFormFields({ app: APP_ID, properties })
      );
    } catch (error) {
      console.log(error);
    }
  }

  public async deleteFormFields() {
    const fields = ["fieldCode"];

    try {
      console.log(
        await this.client.app.deleteFormFields({ app: APP_ID, fields })
      );
    } catch (error) {
      console.log(error);
    }
  }

  public async getFormLayout() {
    try {
      console.log(await this.client.app.getFormLayout({ app: APP_ID }));
    } catch (error) {
      console.log(error);
    }
  }

  public async getFormLayoutPreview() {
    try {
      console.log(
        await this.client.app.getFormLayout({ app: APP_ID, preview: true })
      );
    } catch (error) {
      console.log(error);
    }
  }

  public async updateFormLayout() {
    try {
      const { layout } = await this.client.app.getFormLayout({
        app: APP_ID,
        preview: true
      });
      const lastRow = layout.pop();
      if (lastRow) {
        const newLayout = [lastRow, ...layout];

        console.log(
          await this.client.app.updateFormLayout({
            app: APP_ID,
            layout: newLayout
          })
        );
      }
    } catch (error) {
      console.log(error);
    }
  }

  public async getViews() {
    try {
      console.log(await this.client.app.getViews({ app: APP_ID }));
    } catch (error) {
      console.log(error);
    }
  }

  public async getViewsPreview() {
    try {
      console.log(
        await this.client.app.getViews({ app: APP_ID, preview: true })
      );
    } catch (error) {
      console.log(error);
    }
  }

  public async updateViews() {
    try {
      const { views } = await this.client.app.getViews({ app: APP_ID });
      const newViews = views;
      console.log(
        await this.client.app.updateViews({ app: APP_ID, views: newViews })
      );
    } catch (error) {
      console.log(error);
    }
  }

  public async getProcessManagement() {
    try {
      console.log(await this.client.app.getProcessManagement({ app: APP_ID }));
    } catch (error) {
      console.log(error);
    }
  }

  public async updateProcessManagement() {
    try {
      console.log(
        await this.client.app.updateProcessManagement({ app: APP_ID })
      );
    } catch (error) {
      console.log(error);
    }
  }

  public async getApp() {
    try {
      console.log(await this.client.app.getApp({ id: APP_ID }));
    } catch (error) {
      console.log(error);
    }
  }

  public async getApps() {
    try {
      console.log(await this.client.app.getApps({}));
    } catch (error) {
      console.log(error);
    }
  }

  public async addApp() {
    try {
      console.log(
        await this.client.app.addApp({ name: "TEST_APP", space: SPACE_ID })
      );
    } catch (error) {
      console.log(error);
    }
  }

  public async getDeployStatus() {
    try {
      console.log(
        await this.client.app.getDeployStatus({
          apps: [APP_ID]
        })
      );
    } catch (error) {
      console.log(error);
    }
  }

  public async deployApp() {
    try {
      console.log(
        await this.client.app.deployApp({
          apps: [{ app: APP_ID }]
        })
      );
    } catch (error) {
      console.log(error);
    }
  }

  public async revertApp() {
    try {
      console.log(
        await this.client.app.deployApp({
          apps: [{ app: APP_ID }],
          revert: true
        })
      );
    } catch (error) {
      console.log(error);
    }
  }

  public async getFieldAcl() {
    try {
      console.log(await this.client.app.getFieldAcl({ app: APP_ID }));
    } catch (error) {
      console.log(error);
    }
  }

  public async getFieldAclPreview() {
    try {
      console.log(
        await this.client.app.getFieldAcl({ app: APP_ID, preview: true })
      );
    } catch (error) {
      console.log(error);
    }
  }

  public async getRecordAcl() {
    try {
      console.log(await this.client.app.getFieldAcl({ app: APP_ID }));
    } catch (error) {
      console.log(error);
    }
  }

  public async evaluateRecordsAcl() {
    const params = {
      app: APP_ID,
      ids: [RECORD_ID]
    };
    console.log(
      JSON.stringify(await this.client.app.evaluateRecordsAcl(params))
    );
  }

  public async updateFieldAcl() {
    const rights = [
      {
        code: "Customer",
        entities: [
          {
            accessibility: "WRITE" as const,
            entity: {
              code: "Administrator",
              type: "USER" as const
            }
          },
          {
            accessibility: "READ" as const,
            entity: {
              code: "everyone",
              type: "GROUP" as const
            }
          }
        ]
      }
    ];
    try {
      console.log(
        await this.client.app.updateFieldAcl({ app: APP_ID, rights })
      );
    } catch (error) {
      console.log(error);
    }
  }
}
