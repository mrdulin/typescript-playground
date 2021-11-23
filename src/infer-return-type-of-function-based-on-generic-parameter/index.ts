export function tempDir<T extends boolean | undefined = undefined>(repo: string, isPath?: T):
  T extends true ? string :
  T extends false | undefined ? string : never {
  const repoName = repo;
  const repoPath = `test/path/${repoName}`;
  return (isPath ? repoPath : { repoName, repoPath }) as any;
}

const r11 = tempDir('t', true)
const r12 = tempDir('t', false)
const r13 = tempDir('t')


// Better
type Response<T> =
  T extends true ? string :
  T extends false | undefined ? Record<'repoName' | 'repoPath', string> : never;

export function tempDir2<T extends boolean | undefined = undefined>(repo: string, isPath?: T) {
  const repoName = repo;
  const repoPath = `test/path/${repoName}`;
  return (isPath ? repoPath : { repoName, repoPath }) as Response<T>
}

const r0 = tempDir2('t', true)
const r1 = tempDir2('t', false)
const r2 = tempDir2('t', 'false')
const r3 = tempDir2('t', 1)
const r4 = tempDir2('t')

r0.charAt
r1.repoName
r4.repoName
