import { Provider as BalancerProvider } from 'react-wrap-balancer'

interface Props {
  children: React.ReactNode;
}

const Providers = ({ children }: Props) => {
  return (
    <BalancerProvider>
      {children}
    </BalancerProvider>
  )
}

export default Providers
