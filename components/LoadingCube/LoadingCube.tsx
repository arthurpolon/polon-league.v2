import { useTheme } from 'contexts/theme';
import css from './LoadingCube.module.css';

const LoadingCube = () => {
  const { isDark } = useTheme();

  return (
    <div
      className={isDark ? [css.container, css.dark].join(' ') : css.container}
    >
      <div className={css.h1Container}>
        <div className={[css.cube, css.h1, css.w1, css.l1].join(' ')}>
          <div className={[css.face, css.top].join(' ')}></div>
          <div className={[css.face, css.left].join(' ')}></div>
          <div className={[css.face, css.right].join(' ')}></div>
        </div>

        <div className={[css.cube, css.h1, css.w1, css.l2].join(' ')}>
          <div className={[css.face, css.top].join(' ')}></div>
          <div className={[css.face, css.left].join(' ')}></div>
          <div className={[css.face, css.right].join(' ')}></div>
        </div>

        <div className={[css.cube, css.h1, css.w1, css.l3].join(' ')}>
          <div className={[css.face, css.top].join(' ')}></div>
          <div className={[css.face, css.left].join(' ')}></div>
          <div className={[css.face, css.right].join(' ')}></div>
        </div>

        <div className={[css.cube, css.h1, css.w2, css.l1].join(' ')}>
          <div className={[css.face, css.top].join(' ')}></div>
          <div className={[css.face, css.left].join(' ')}></div>
          <div className={[css.face, css.right].join(' ')}></div>
        </div>

        <div className={[css.cube, css.h1, css.w2, css.l2].join(' ')}>
          <div className={[css.face, css.top].join(' ')}></div>
          <div className={[css.face, css.left].join(' ')}></div>
          <div className={[css.face, css.right].join(' ')}></div>
        </div>

        <div className={[css.cube, css.h1, css.w2, css.l3].join(' ')}>
          <div className={[css.face, css.top].join(' ')}></div>
          <div className={[css.face, css.left].join(' ')}></div>
          <div className={[css.face, css.right].join(' ')}></div>
        </div>

        <div className={[css.cube, css.h1, css.w3, css.l1].join(' ')}>
          <div className={[css.face, css.top].join(' ')}></div>
          <div className={[css.face, css.left].join(' ')}></div>
          <div className={[css.face, css.right].join(' ')}></div>
        </div>

        <div className={[css.cube, css.h1, css.w3, css.l2].join(' ')}>
          <div className={[css.face, css.top].join(' ')}></div>
          <div className={[css.face, css.left].join(' ')}></div>
          <div className={[css.face, css.right].join(' ')}></div>
        </div>

        <div className={[css.cube, css.h1, css.w3, css.l3].join(' ')}>
          <div className={[css.face, css.top].join(' ')}></div>
          <div className={[css.face, css.left].join(' ')}></div>
          <div className={[css.face, css.right].join(' ')}></div>
        </div>
      </div>

      <div className={css.h2Container}>
        <div className={[css.cube, css.h2, css.w1, css.l1].join(' ')}>
          <div className={[css.face, css.top].join(' ')}></div>
          <div className={[css.face, css.left].join(' ')}></div>
          <div className={[css.face, css.right].join(' ')}></div>
        </div>

        <div className={[css.cube, css.h2, css.w1, css.l2].join(' ')}>
          <div className={[css.face, css.top].join(' ')}></div>
          <div className={[css.face, css.left].join(' ')}></div>
          <div className={[css.face, css.right].join(' ')}></div>
        </div>

        <div className={[css.cube, css.h2, css.w1, css.l3].join(' ')}>
          <div className={[css.face, css.top].join(' ')}></div>
          <div className={[css.face, css.left].join(' ')}></div>
          <div className={[css.face, css.right].join(' ')}></div>
        </div>

        <div className={[css.cube, css.h2, css.w2, css.l1].join(' ')}>
          <div className={[css.face, css.top].join(' ')}></div>
          <div className={[css.face, css.left].join(' ')}></div>
          <div className={[css.face, css.right].join(' ')}></div>
        </div>

        <div className={[css.cube, css.h2, css.w2, css.l2].join(' ')}>
          <div className={[css.face, css.top].join(' ')}></div>
          <div className={[css.face, css.left].join(' ')}></div>
          <div className={[css.face, css.right].join(' ')}></div>
        </div>

        <div className={[css.cube, css.h2, css.w2, css.l3].join(' ')}>
          <div className={[css.face, css.top].join(' ')}></div>
          <div className={[css.face, css.left].join(' ')}></div>
          <div className={[css.face, css.right].join(' ')}></div>
        </div>

        <div className={[css.cube, css.h2, css.w3, css.l1].join(' ')}>
          <div className={[css.face, css.top].join(' ')}></div>
          <div className={[css.face, css.left].join(' ')}></div>
          <div className={[css.face, css.right].join(' ')}></div>
        </div>

        <div className={[css.cube, css.h2, css.w3, css.l2].join(' ')}>
          <div className={[css.face, css.top].join(' ')}></div>
          <div className={[css.face, css.left].join(' ')}></div>
          <div className={[css.face, css.right].join(' ')}></div>
        </div>

        <div className={[css.cube, css.h2, css.w3, css.l3].join(' ')}>
          <div className={[css.face, css.top].join(' ')}></div>
          <div className={[css.face, css.left].join(' ')}></div>
          <div className={[css.face, css.right].join(' ')}></div>
        </div>
      </div>

      <div className={css.h3Container}>
        <div className={[css.cube, css.h3, css.w1, css.l1].join(' ')}>
          <div className={[css.face, css.top].join(' ')}></div>
          <div className={[css.face, css.left].join(' ')}></div>
          <div className={[css.face, css.right].join(' ')}></div>
        </div>

        <div className={[css.cube, css.h3, css.w1, css.l2].join(' ')}>
          <div className={[css.face, css.top].join(' ')}></div>
          <div className={[css.face, css.left].join(' ')}></div>
          <div className={[css.face, css.right].join(' ')}></div>
        </div>

        <div className={[css.cube, css.h3, css.w1, css.l3].join(' ')}>
          <div className={[css.face, css.top].join(' ')}></div>
          <div className={[css.face, css.left].join(' ')}></div>
          <div className={[css.face, css.right].join(' ')}></div>
        </div>

        <div className={[css.cube, css.h3, css.w2, css.l1].join(' ')}>
          <div className={[css.face, css.top].join(' ')}></div>
          <div className={[css.face, css.left].join(' ')}></div>
          <div className={[css.face, css.right].join(' ')}></div>
        </div>

        <div className={[css.cube, css.h3, css.w2, css.l2].join(' ')}>
          <div className={[css.face, css.top].join(' ')}></div>
          <div className={[css.face, css.left].join(' ')}></div>
          <div className={[css.face, css.right].join(' ')}></div>
        </div>

        <div className={[css.cube, css.h3, css.w2, css.l3].join(' ')}>
          <div className={[css.face, css.top].join(' ')}></div>
          <div className={[css.face, css.left].join(' ')}></div>
          <div className={[css.face, css.right].join(' ')}></div>
        </div>

        <div className={[css.cube, css.h3, css.w3, css.l1].join(' ')}>
          <div className={[css.face, css.top].join(' ')}></div>
          <div className={[css.face, css.left].join(' ')}></div>
          <div className={[css.face, css.right].join(' ')}></div>
        </div>

        <div className={[css.cube, css.h3, css.w3, css.l2].join(' ')}>
          <div className={[css.face, css.top].join(' ')}></div>
          <div className={[css.face, css.left].join(' ')}></div>
          <div className={[css.face, css.right].join(' ')}></div>
        </div>

        <div className={[css.cube, css.h3, css.w3, css.l3].join(' ')}>
          <div className={[css.face, css.top].join(' ')}></div>
          <div className={[css.face, css.left].join(' ')}></div>
          <div className={[css.face, css.right].join(' ')}></div>
        </div>
      </div>
    </div>
  );
};

export default LoadingCube;
