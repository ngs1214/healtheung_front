import { create } from 'zustand';
import { devtools } from 'zustand/middleware';

export interface User {
    userId: string;
    role: string;
    exp: number;
  }
  
interface AuthState {
    isAuthenticated: boolean;
    user: User | null;
    login: (user: User) => void;
    logout: () => void;
  }

export const useAuthStore = create<AuthState>(devtools((set) => ({
  isAuthenticated: false,
  user: null,
  login: (user:User) => set({ isAuthenticated: true, user }),
  logout: () => set({ isAuthenticated: false, user: null }),
})));