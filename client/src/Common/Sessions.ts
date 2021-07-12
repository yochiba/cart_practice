namespace Sessions {
  // Registered sessions
  export type registeredSessions = {
    sessionToken: string;
    accessToken: string;
    preRegistered: boolean;
    createdAt: Date;
    updatedAt: Date;
  }

  const initialDate: Date = new Date('1900/01/01 00:00:00')
  export const initialRegisteredSessions = {
    sessionToken: '',
    accessToken: '',
    preRegistered: true,
    createdAt: initialDate,
    updatedAt: initialDate,
  }
}

export default Sessions;