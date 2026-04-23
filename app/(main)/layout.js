import { MainHeaders } from '../../_Pages/main/layout/header/header';

export default function MainLayout({ children }) {
  return (
    <>
      <MainHeaders />
      <main style={{ marginTop: '80px', marginLeft: '250px', minHeight: 'calc(100vh - 80px)' }}>
        {children}
      </main>
    </>
  );
}
