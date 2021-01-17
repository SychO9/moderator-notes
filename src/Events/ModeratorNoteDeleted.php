<?php

/*
 * This file is part of fof/moderator-notes.
 *
 * Copyright (c) 2020 - 2021 FriendsOfFlarum.
 *
 * For the full copyright and license information, please view the LICENSE.md
 * file that was distributed with this source code.
 */

namespace FoF\ModeratorNotes\Events;

use Flarum\User\User;
use FoF\ModeratorNotes\Model\ModeratorNote;

class ModeratorNoteDeleted
{
    /**
     * @var User
     */
    public $actor;

    /**
     * @var ModeratorNote
     */
    public $note;

    public function __construct(User $actor, ModeratorNote $note)
    {
        $this->actor = $actor;
        $this->note = $note;
    }
}
