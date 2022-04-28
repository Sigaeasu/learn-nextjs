import {Fragment} from 'react';
import Link from 'next/link';

export default function Home() {
  return (
    <Fragment>
      <h1>Home Page</h1>
      <ul>
        <li>
          <Link href="/news/krakatau-volcano-is-erupted">
            Krakatau Volcano is Erupted
          </Link>
        </li>
        <li>
          <Link href="/news/earthquake-in-lombok">
            Earthquake in Lombok
          </Link>
        </li>
      </ul>
    </Fragment>
  )
}
