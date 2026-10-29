<?php

namespace Tests\Feature;

use Tests\TestCase;

class PublicPagesTest extends TestCase
{
    /**
     * Every published information page should render successfully.
     */
    public function test_public_pages_render(): void
    {
        foreach (['/', '/services', '/solutions', '/work', '/insights', '/academy', '/about', '/contact'] as $url) {
            $this->get($url)->assertOk();
        }
    }

    public function test_homepage_mentions_ktyra(): void
    {
        $this->get('/')->assertSee('KTYRA')->assertSee('We engineer');
    }

    public function test_website_contact_does_not_fake_live_submissions(): void
    {
        $this->get('/contact')->assertSee('Not yet accepting submissions');
    }
}
