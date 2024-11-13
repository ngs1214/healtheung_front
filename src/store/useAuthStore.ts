import { create } from 'zustand';

interface User {
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

export const useAuthStore = create<AuthState>((set) => ({
 isAuthenticated: false,
  user: null,
  login: (user: User) => set({ isAuthenticated: true, user }), // 사용자 정보 저장
  logout: () => set({ isAuthenticated: false, user: null }), // 로그아웃
}));