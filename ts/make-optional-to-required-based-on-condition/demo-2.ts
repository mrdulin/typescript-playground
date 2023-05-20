interface IOptions {
  clientId: string;
  token: string;
}

interface IComponent {
  name: string;
  parent: { name: string };
}

async function createComponent(opts?: IOptions): Promise<Pick<IComponent, 'name'> | IComponent> {
  const component: IComponent = { name: '', parent: { name: '' } };

  if (opts) {
    component.parent = { name: `${opts.clientId}-${opts.token}` };
  }

  if (opts) {
    return component as IComponent;
  } else {
    return component as Pick<IComponent, 'name'>;
  }
}

async function main() {
  const { name, parent }: Pick<IComponent, 'name'> = await createComponent();

  console.log(parent.name);
}

async function otherMain() {
  const opts: IOptions = { clientId: '123', token: '321' };
  const { name, parent } = (await createComponent(opts)) as IComponent;

  console.log(parent.name);
}

export { createComponent };
