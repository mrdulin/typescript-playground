interface IOptions {
  clientId: string;
  token: string;
}

interface IComponent {
  name: string;

  parent?: { name: string };
}

async function createComponent(): Promise<IComponent>;
async function createComponent(opts: IOptions): Promise<Required<IComponent>>;
async function createComponent(opts?: IOptions): Promise<IComponent> {
  const component: IComponent = { name: '' };

  if (opts) {
    component.parent = { name: `${opts.clientId}-${opts.token}` };
  }

  return component;
}

async function main() {
  const { name, parent } = await createComponent();

  console.log(parent.name);
}

async function otherMain() {
  const opts: IOptions = { clientId: '123', token: '321' };
  const component: Required<IComponent> = await createComponent(opts);

  console.log(component.parent.name);
}

export { createComponent };
