// async/await和for循环配合使用

// 问题： 现有模块id数组moduleIds，通过模块id请求模块数据，并且，后一个模块的接口请求依赖前一个模块的数据。当任意一个接口请求失败，则终止后续的请求。
// 实现一个函数，返回结果包含请求成功模块的数据和请求失败模块的错误信息。
interface IApiResponse {
  message: string;
  errorCode: number;
  dataBePassedToNextModule?: string;
}
interface IApiResponseWithId extends IApiResponse {
  id: number;
}

interface IExtraData {
  info: string;
}

interface INgOnInit {
  ngOnInit(): void;
}

interface IViewModel {
  id: number;
  message: string;
}

interface IViewModelById {
  [id: number]: IViewModel;
}

const coin = (): boolean => Math.random() < 0.5;
const apiErrorSwitch: string = 'on';
const mockDatasBePassedToNextModule: string[] = ['react', 'angular', 'jquery'];

const fetch = (id: number, data?: string | undefined): Promise<IApiResponse> =>
  new Promise((resolve, reject) => {
    const coinValue: boolean = coin();
    let result: IApiResponse;
    // console.log('coinValue: ', coinValue);
    const baseMessage: string = `请求module:${id}数据成功`;
    setTimeout(() => {
      const successData: IApiResponse = {
        message: data ? `${baseMessage}|${data}` : baseMessage,
        errorCode: 0,
        dataBePassedToNextModule: mockDatasBePassedToNextModule[id - 1]
      };
      const errorData: IApiResponse = {
        message: `请求module:${id}数据失败`,
        errorCode: -100
      };
      if (apiErrorSwitch === 'on') {
        result = coinValue ? successData : errorData;
      } else {
        result = successData;
      }
      if (result.errorCode) {
        reject(result);
      }
      resolve(successData);
    }, 1000);
  });

const fetchModule = async (id: number, data?: string | undefined): Promise<IApiResponseWithId> => {
  try {
    const result: IApiResponse = await fetch(id, data);
    const resultWithId: IApiResponseWithId = Object.assign({ id }, result);
    return resultWithId;
  } catch (errObj) {
    errObj.id = id;
    delete errObj.errorCode;
    errObj.extraData = { info: '前端附加错误信息' };
    throw errObj;
  }
};

function fetchFirstModule(idx: number): boolean {
  return idx === 0;
}

async function fetchModulesByIds(modIds: number[]): Promise<IViewModelById> {
  const moduleById: IViewModelById = {};
  let module: IApiResponseWithId;
  let dataBePassedToNextModule: string | undefined;
  let error: any;
  for (let i: number = 0, moduleIdCount: number = modIds.length; i < moduleIdCount; i++) {
    const moduleId: number = modIds[i];
    if (error) break;
    try {
      console.log(Date.now());
      if (dataBePassedToNextModule || fetchFirstModule(i)) {
        module = await fetchModule(moduleId, dataBePassedToNextModule);
        dataBePassedToNextModule = module.dataBePassedToNextModule;
        const vm: IViewModel = getViewModelByModule(module);
        moduleById[vm.id] = vm;
      }
    } catch (err) {
      error = err;
      moduleById[err.id] = err;
    }
  }
  return moduleById;
}

function getViewModelByModule(mod: IApiResponseWithId): IViewModel {
  const vm: IViewModel = { id: -1, message: '' };
  vm.id = mod.id;
  vm.message = mod.message;
  return vm;
}

class Component implements INgOnInit {
  public vm: any = {
    1: {},
    2: {},
    3: {}
  };
  private moduleIds: number[] = [1, 2, 3];
  constructor() {
    this.ngOnInit();
  }

  public async ngOnInit() {
    //fetch一个模块
    try {
      const moduleOne = await fetchModule(1);
      console.log('moduleOne: ', moduleOne);
    } catch (e) {
      console.log('moduleOne error:', e);
    }

    //fetch若干模块
    const moduleById = await fetchModulesByIds(this.moduleIds);
    this.vm = Object.assign(this.vm, moduleById);
    console.log('render vm: ', this.vm);
  }
}

const myFuckingComponent = new Component();

export {};
