export interface AlertState {
    open: boolean;
    message: string;
    severity?: 'error' | 'info' | 'warning' | 'success'
  }