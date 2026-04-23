import { MainHeaders } from '../../_Pages/main/layout/header/header';

export default function MainLayout({ children }) {
  return (
    <>
      <MainHeaders />
      <main style={{ marginTop: '64px', marginLeft: '240px', minHeight: 'calc(100vh - 64px)' }}>
        {children}
      </main>
    </>
  );
}
