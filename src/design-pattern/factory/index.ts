interface IBaseDao {
  findOne(): Promise<any>;
}

abstract class BaseDao implements IBaseDao {
  public async findOne() {}
}

interface IUserDao extends IBaseDao {
  findByEmail(email: string): Promise<any>;
}

class UserDaoImpl extends BaseDao implements IUserDao {
  public async findByEmail(email: string) {}
}

interface IPostDao extends IBaseDao {
  findByTitle(title: string): Promise<any>;
}
class PostDaoImpl extends BaseDao implements IPostDao {
  public async findByTitle(title: string) {}
}

class DaoFactory {
  public static create(daoName: string): IBaseDao {
    switch (daoName) {
      case 'user':
        return new UserDaoImpl();
      case 'post':
        return new PostDaoImpl();
      default:
        throw new Error(`no DAO for daoName = ${daoName}`);
    }
  }
}

const userDao: IUserDao = DaoFactory.create('user');
userDao.findByEmail();
