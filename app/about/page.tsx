import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

export const metadata: Metadata = {
  title: '소개 | Indie for Life',
  description: '인디 게임을 사랑하는 주인장의 블로그 소개 페이지입니다.',
};

export default function AboutPage() {
  return (
    <div className="container max-w-4xl py-16">
      {/* 블로그 소개 섹션 */}
      <section className="mb-16">
        <h1 className="text-4xl font-bold mb-6 bg-gradient-to-r from-primary via-purple-600 to-blue-600 bg-clip-text text-transparent">
          Indie for Life
        </h1>
        <div className="prose prose-lg dark:prose-invert max-w-none">
          <p className="text-lg text-muted-foreground mb-6">
            안녕하세요! Indie for Life는 주인장이 직접 플레이하고 경험한 인디 게임들을 소개하는 블로그입니다.
            대형 게임사들의 게임들도 좋지만, 독특하고 창의적인 인디 게임들의 매력에 빠져 여러분과 함께 나누고 싶습니다.
          </p>
          <p className="text-lg text-muted-foreground mb-6">
            이 블로그에서는 제가 직접 플레이 한 경험들을 바탕으로 여러분께 추천해 드릴만한 게임들을 소개하고자 합니다.
          </p>
        </div>
      </section>

      {/* 작성자 소개 섹션 */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-8">작성자 소개</h2>
        <Card className="overflow-hidden">
          <CardContent className="p-6">
            <div className="flex flex-col md:flex-row gap-8 items-center">
              <div className="w-48 h-48 relative rounded-full overflow-hidden">
                <Image
                  src="/images/profile.jpg"
                  alt="프로필 이미지"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-bold mb-4">게임 애호가</h3>
                <p className="text-muted-foreground mb-4">
                  대형 게임사들의 BM, 병크들에 지쳐 인디 게임에 손을 댔다가 그 매력에 푹 빠진 18년차 겜창입니다.
                </p>
                <div className="flex gap-4">
                  <Button variant="outline" asChild>
                    <Link href="mailto:your.email@example.com">
                      ✉️ 이메일 보내기
                    </Link>
                  </Button>
                  <Button variant="outline" asChild>
                    <Link href="https://twitter.com/yourusername" target="_blank">
                      🐦 트위터
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* 블로그의 목적과 방향성 섹션 */}
      <section>
        <h2 className="text-3xl font-bold mb-8">블로그의 목적과 방향성</h2>
        <div className="grid gap-6 md:grid-cols-2">
          <Card>
            <CardContent className="p-6">
              <h3 className="text-xl font-bold mb-4">🎮 다양한 인디 게임 소개</h3>
              <p className="text-muted-foreground">
                가볍게 즐기기 좋은, 수십시간은 투자할만 한 혹은 사람들에게 잘 알려지지 않았지만 여러분들이 플레이할만 한 게임들을 소개하고자 합니다.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6">
              <h3 className="text-xl font-bold mb-4">💡 창의적인 게임 문화 조성</h3>
              <p className="text-muted-foreground">
                인디 게임 개발자들의 창의성과 열정을 응원하며, 독특하고 혁신적인 게임 문화가 
                더욱 발전할 수 있도록 기여하고자 합니다.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6">
              <h3 className="text-xl font-bold mb-4">📝 솔직한 리뷰</h3>
              <p className="text-muted-foreground">
                각 게임의 장단점을 솔직하게 평가하고, 독자들이 자신에게 맞는 게임을 
                선택할 수 있도록 도움을 드리고자 합니다.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
} 