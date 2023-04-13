import Image from 'next/image';
import { ChangeEvent, FormEvent, ReactElement, useState } from 'react';
import styled from 'styled-components';
import { AxiosPost } from '../api/fetcher';

const PortfolioEdit = (): ReactElement => {
  const [imageSrc, setImageSrc] = useState<string>('');
  function handleUploadImage(e: ChangeEvent<HTMLInputElement>) {
    const reader = new FileReader();
    if (!e.target.files) return;
    const file = e.target.files[0];

    reader.readAsDataURL(file);
    reader.onloadend = () => {
      setImageSrc(reader.result as string);
    };
  }
  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    AxiosPost('/api/portfolios', { image: imageSrc });
    e.preventDefault();
  }

  return (
    <DIV_PortfolioEdit>
      <article>
        <Image
          src={imageSrc}
          width={200}
          height={200}
          alt={'업로드 이미지 미리보기'}
        />
      </article>
      <form onSubmit={handleSubmit}>
        <label htmlFor='title'>제목</label>
        <input id='title' type='text' />
        <label htmlFor='description'>설명</label>
        <input id='description' type='textarea' />
        <label htmlFor='file'>파일 업로드</label>
        <input id='file' type='file' onChange={handleUploadImage} />
        <button type='submit'>등록하기</button>
      </form>
    </DIV_PortfolioEdit>
  );
};

const DIV_PortfolioEdit = styled.div`
  img {
    object-fit: cover;
  }
`;

export default PortfolioEdit;
