import { hash, compare } from 'bcrypt';

export async function hashPassword(password: string): Promise<string> {
  return await hash(password, 10);
}

export function comparePassword(
  password: string,
  hashedPassword: string,
): Promise<Boolean> {
  const result = compare(password.trim(), hashedPassword.trim());
  return result;
}
