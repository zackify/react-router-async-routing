import { Link } from 'react-router-dom';

export default loader => {
  class AsyncLink extends React.Component {
    async loadBeforeNavigate() {
      let { to } = this.props;
      let { router } = this.context;
      await loader({ path: to });

      window.scrollTo(0, 0);
      return router.history.push(to);
    }

    render() {
      let { to, onClick, className, children } = this.props; // eslint-disable-line

      return <Link
          to={to}
          className={className}
          onClick={e => {
            this.loadBeforeNavigate();
            if (onClick) onClick();
          }}
        >{children}</Link>;
    }
  }
  AsyncLink.contextTypes = {
    router: React.PropTypes.object,
  };

  return AsyncLink;
};
