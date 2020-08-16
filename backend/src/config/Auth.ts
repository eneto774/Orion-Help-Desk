interface IAuthConfig {
  secretHash: string;
  expiresIn: string;
}

export default {
  secretHash:
    '12d80a6b978981f605d0495f016e047996cc285c0a7415aed8df1484ebf4f804',
  expiresIn: '1d',
} as IAuthConfig;
