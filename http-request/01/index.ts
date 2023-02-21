import * as TE from 'fp-ts/lib/TaskEither';
import * as E from 'fp-ts/lib/Either';
import * as t from 'io-ts';
import { pipe } from 'fp-ts/lib/function';

const ProfileWithEmailValidated = t.type({
  name: t.string,
});

type User = any;

type Profile = { value: { name: string } };

class ProfileService {
  getProfile(user: User): Promise<Profile> {
    return new Promise((resolve) => resolve({ value: { name: 'Lin' } }));
  }
}

export const profileWithEmailValidatedOrError = (profileService: ProfileService, user: User) =>
  pipe(
    TE.tryCatch(
      () => profileService.getProfile(user),
      () => new Error('Error retrieving user profile'),
    ),
    TE.chainW((profile) =>
      pipe(
        profile.value,
        ProfileWithEmailValidated.decode,
        E.mapLeft((_) => new Error('Profile has not a validated email address')),
        TE.fromEither,
      ),
    ),
  );

profileWithEmailValidatedOrError(new ProfileService(), {})().then(console.log);
