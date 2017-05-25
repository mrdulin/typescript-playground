describe('mockFn test suites', () => {

  describe('mockFn.mock.calls', () => {

    it('An array that represents all calls that have been made into this mock function. Each call is represented by an array of arguments that were passed during the call', () => {
      const mockFn = jest.fn();
      mockFn(1,2);
      mockFn(3,4);
      expect(mockFn.mock.calls[0]).toEqual([1,2]);
      expect(mockFn.mock.calls[1]).toEqual([3,4]);
      expect(mockFn.mock.calls).toHaveLength(2);
      
    });

  });
  
  describe('mockFn.mock.instances', () => {

    //mockFn.mock.instances是一个数组，包含了所有从jest.fn()实例化的对象

    it('A mock function that has been instantiated twice would have the following mock.instances array', () => {

      const mockFn = jest.fn();
      const a = new mockFn();
      const b = new mockFn();

      expect(mockFn.mock.instances[0]).toEqual(a);
      expect(mockFn.mock.instances[1]).toEqual(b);
      expect(mockFn.mock.instances).toHaveLength(2);

    });

    it('without new', () => {

      const mockFn = jest.fn();
      mockFn(0, 1);
      expect(mockFn.mock.instances).toHaveLength(1);

      mockFn(2,3);
      expect(mockFn.mock.instances).toHaveLength(2);

      console.log(mockFn.mock.instances);

    });
    
  });

  describe('mockFn.mockClear()', () => {

    //重置mockFn.mock.calls和 mockFn.mock.instances中的数据
    //如果要在两个断言之间进行一些清理工作，使用这个方法比较合适
    //执行mockFn.mockClear()将会替换mockFn.mock，而不仅仅是清空mockFn.mock.calls 和 mockFn.mock.instances, 因此，需要避免把mockFn.mock赋值给其他变量，以防止通过该变量访问到老旧数据

    it('Resets all information stored in the mockFn.mock.calls and mockFn.mock.instances arrays.', () => {
      
      const mockFn = jest.fn();
      mockFn('emilie', 26);

      expect(mockFn.mock.calls[0]).toEqual(['emilie', 26]);
      expect(mockFn.mock.calls).toHaveLength(1);
      
      //在下个expect断言之前进行mockFn的清理工作
      mockFn.mockClear();

      expect(mockFn.mock.calls[0]).toBeUndefined;
      expect(mockFn.mock.calls).toHaveLength(0);

    });

  });

  describe('mockFn.mockReset()', () => {

    //替换mockFn.mock，重置所有mock信息，包括mockFn.mock.instances和mockFn.mock.calls，以及mockFn的实现

    it('Resets all information stored in the mock, including any inital implementation given.', () => {

      //给mockImplementation传入一个方法，用来实现该mockFn的功能
      const mockFn = jest.fn().mockImplementation((name: string) => `HI! ${name.toUpperCase()}`);

      const a: string = mockFn('emilie');
      expect(a).toBe('HI! EMILIE');

      expect(mockFn.mock.calls[0]).toEqual(['emilie']);
      expect(mockFn.mock.calls).toHaveLength(1);

      mockFn.mockReset();

      expect(mockFn.mock.calls).toHaveLength(0);
      expect(mockFn.mock.instances).toHaveLength(0);

      const b = mockFn('novaline');
      expect(b).not.toBe('HI! NOVALINE');

      expect(mockFn.mock.calls[0]).toEqual(['novaline']);
      expect(mockFn.mock.calls).toHaveLength(1);
      expect(mockFn.mock.instances).toHaveLength(1);
    

    });

  });

  describe('mockFn.mockRestore()', () => {

  });
  

  describe('mockFn.mockImplementation(fn)', () => {

    //给mockImplementation传入一个方法，用来实现该mockFn的功能

    it('Accepts a function that should be used as the implementation of the mock. The mock itself will still record all calls that go into and instances that come from itself – the only difference is that the implementation will also be executed when the mock is called.', () => {
      
      let mockFn = jest.fn();
      mockFn.mockImplementation((num: number): number => num + 42);
      
      const a: number = mockFn(1);
      const b: number = mockFn(2);

      expect(a).toBe(43);
      expect(b).toBe(44);

      expect(mockFn.mock.calls[0]).toEqual([1]);
      expect(mockFn.mock.calls[1]).toEqual([2]);
      expect(mockFn.mock.calls).toHaveLength(2);

      //清理mockFn.mock.instances和mock
      mockFn.mockClear();
      
      expect(mockFn.mock.calls).toHaveLength(0);
    
      const c: number = mockFn(3);
      expect(c).toBe(45);

      expect(mockFn.mock.calls[0]).toEqual([3]);
      expect(mockFn.mock.calls).toHaveLength(1);

    });

  });

});
